import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-official');
}

export default function NewVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-official" />;
}
