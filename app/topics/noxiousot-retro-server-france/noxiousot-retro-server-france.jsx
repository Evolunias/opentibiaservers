import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-france');
}

export default function NoxiousotRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-france" />;
}
