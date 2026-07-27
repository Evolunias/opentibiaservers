import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-client');
}

export default function LowrateThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-client" />;
}
