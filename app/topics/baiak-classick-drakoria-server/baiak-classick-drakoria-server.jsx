import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-classick-drakoria-server');
}

export default function BaiakClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-classick-drakoria-server" />;
}
