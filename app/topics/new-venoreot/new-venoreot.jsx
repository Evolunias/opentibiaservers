import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot');
}

export default function NewVenoreotKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot" />;
}
