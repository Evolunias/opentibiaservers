import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-usa');
}

export default function AlasteraNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-usa" />;
}
