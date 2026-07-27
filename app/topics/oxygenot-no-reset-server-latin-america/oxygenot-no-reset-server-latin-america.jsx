import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-latin-america');
}

export default function OxygenotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-latin-america" />;
}
