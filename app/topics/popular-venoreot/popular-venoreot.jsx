import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot');
}

export default function PopularVenoreotKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot" />;
}
