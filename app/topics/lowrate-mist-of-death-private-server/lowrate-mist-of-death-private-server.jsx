import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-private-server');
}

export default function LowrateMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-private-server" />;
}
