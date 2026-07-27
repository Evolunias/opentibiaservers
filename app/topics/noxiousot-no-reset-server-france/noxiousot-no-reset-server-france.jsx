import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-france');
}

export default function NoxiousotNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-france" />;
}
