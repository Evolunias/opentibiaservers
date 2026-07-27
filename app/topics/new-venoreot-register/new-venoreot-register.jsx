import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-register');
}

export default function NewVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-register" />;
}
