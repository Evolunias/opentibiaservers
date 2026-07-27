import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-register');
}

export default function FreshStartVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-register" />;
}
