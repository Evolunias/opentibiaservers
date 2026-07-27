import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-6-baiak-server');
}

export default function Noxiousot86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-6-baiak-server" />;
}
