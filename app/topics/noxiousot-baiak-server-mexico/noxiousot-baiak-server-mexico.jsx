import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-mexico');
}

export default function NoxiousotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-mexico" />;
}
