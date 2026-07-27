import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-baiak-server');
}

export default function Noxiousot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-baiak-server" />;
}
