import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-noxiousot-server');
}

export default function PvpeNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-noxiousot-server" />;
}
