import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-baiak-server');
}

export default function Noxiousot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-baiak-server" />;
}
