import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-13-evo-server');
}

export default function BaiakIlusion13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-13-evo-server" />;
}
