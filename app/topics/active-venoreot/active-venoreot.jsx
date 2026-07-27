import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot');
}

export default function ActiveVenoreotKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot" />;
}
