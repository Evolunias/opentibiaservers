import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-baiak-server');
}

export default function Noxiousot12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-baiak-server" />;
}
