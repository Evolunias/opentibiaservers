import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-baiak-server');
}

export default function Noxiousot84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-baiak-server" />;
}
