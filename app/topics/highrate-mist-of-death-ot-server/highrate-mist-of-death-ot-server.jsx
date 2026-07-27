import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-ot-server');
}

export default function HighrateMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-ot-server" />;
}
