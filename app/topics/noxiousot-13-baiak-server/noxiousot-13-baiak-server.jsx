import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-baiak-server');
}

export default function Noxiousot13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-baiak-server" />;
}
