import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-client');
}

export default function TopUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="top-unline-client" />;
}
