import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-server');
}

export default function LowrateMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-server" />;
}
