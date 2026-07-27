import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-server');
}

export default function HighrateMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-server" />;
}
