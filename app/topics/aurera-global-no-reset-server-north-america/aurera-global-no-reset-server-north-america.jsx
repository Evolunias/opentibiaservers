import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-north-america');
}

export default function AureraGlobalNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-north-america" />;
}
