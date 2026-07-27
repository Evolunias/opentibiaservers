import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-yurots-server');
}

export default function BaiakYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-yurots-server" />;
}
