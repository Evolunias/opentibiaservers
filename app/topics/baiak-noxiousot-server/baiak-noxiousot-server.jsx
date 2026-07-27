import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-noxiousot-server');
}

export default function BaiakNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-noxiousot-server" />;
}
