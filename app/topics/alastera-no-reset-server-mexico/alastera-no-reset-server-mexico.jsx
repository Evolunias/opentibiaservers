import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-mexico');
}

export default function AlasteraNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-mexico" />;
}
