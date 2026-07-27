import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-login');
}

export default function NewVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-login" />;
}
