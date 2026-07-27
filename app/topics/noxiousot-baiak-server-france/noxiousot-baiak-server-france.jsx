import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-france');
}

export default function NoxiousotBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-france" />;
}
