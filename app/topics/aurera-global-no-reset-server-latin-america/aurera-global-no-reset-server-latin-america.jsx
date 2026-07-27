import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-latin-america');
}

export default function AureraGlobalNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-latin-america" />;
}
