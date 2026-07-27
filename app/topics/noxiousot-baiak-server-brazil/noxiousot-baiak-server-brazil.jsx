import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-brazil');
}

export default function NoxiousotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-brazil" />;
}
