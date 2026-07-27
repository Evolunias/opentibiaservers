import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-argentina');
}

export default function AlasteraNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-argentina" />;
}
