import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-server');
}

export default function LowrateThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-server" />;
}
