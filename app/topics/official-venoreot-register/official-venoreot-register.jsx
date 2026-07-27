import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-register');
}

export default function OfficialVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-register" />;
}
