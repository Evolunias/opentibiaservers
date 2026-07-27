import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot');
}

export default function TopVenoreotKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot" />;
}
