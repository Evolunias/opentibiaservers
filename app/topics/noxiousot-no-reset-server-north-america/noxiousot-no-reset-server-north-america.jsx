import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-north-america');
}

export default function NoxiousotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-north-america" />;
}
