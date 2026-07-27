import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-low-exp-server-france');
}

export default function NoxiousotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-low-exp-server-france" />;
}
