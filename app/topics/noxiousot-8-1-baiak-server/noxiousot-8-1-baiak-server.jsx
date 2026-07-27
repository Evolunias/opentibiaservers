import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-baiak-server');
}

export default function Noxiousot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-baiak-server" />;
}
