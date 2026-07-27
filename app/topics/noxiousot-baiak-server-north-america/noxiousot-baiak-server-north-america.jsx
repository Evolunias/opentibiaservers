import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-north-america');
}

export default function NoxiousotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-north-america" />;
}
