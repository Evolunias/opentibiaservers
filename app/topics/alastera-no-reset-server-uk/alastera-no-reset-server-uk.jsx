import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-uk');
}

export default function AlasteraNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-uk" />;
}
