import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot');
}

export default function CustomVenoreotKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot" />;
}
