import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-latin-america');
}

export default function NoxiousotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-latin-america" />;
}
