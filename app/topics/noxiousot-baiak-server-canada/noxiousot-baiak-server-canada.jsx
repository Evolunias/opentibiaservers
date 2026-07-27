import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-canada');
}

export default function NoxiousotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-canada" />;
}
