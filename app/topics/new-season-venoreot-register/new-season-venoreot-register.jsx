import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-register');
}

export default function NewSeasonVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-register" />;
}
