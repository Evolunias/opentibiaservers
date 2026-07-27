import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot');
}

export default function FreshStartVenoreotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot" />;
}
