import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-germany');
}

export default function NoxiousotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-germany" />;
}
