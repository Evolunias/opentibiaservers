import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-website');
}

export default function NewVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-website" />;
}
