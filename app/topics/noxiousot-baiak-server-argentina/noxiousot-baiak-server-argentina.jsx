import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-argentina');
}

export default function NoxiousotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-argentina" />;
}
