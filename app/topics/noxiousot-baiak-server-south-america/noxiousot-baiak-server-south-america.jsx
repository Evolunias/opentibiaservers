import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-south-america');
}

export default function NoxiousotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-south-america" />;
}
