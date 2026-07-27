import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-client');
}

export default function PopularUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-client" />;
}
