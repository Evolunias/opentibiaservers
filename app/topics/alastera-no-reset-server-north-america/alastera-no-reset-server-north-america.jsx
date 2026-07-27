import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-north-america');
}

export default function AlasteraNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-north-america" />;
}
