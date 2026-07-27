import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-usa');
}

export default function NoxiousotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-usa" />;
}
