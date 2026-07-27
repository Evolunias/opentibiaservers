import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-client');
}

export default function LowrateAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-client" />;
}
