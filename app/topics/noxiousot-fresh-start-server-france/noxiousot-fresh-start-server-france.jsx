import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-france');
}

export default function NoxiousotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-france" />;
}
