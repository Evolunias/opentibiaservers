import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-login');
}

export default function LowrateThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-login" />;
}
