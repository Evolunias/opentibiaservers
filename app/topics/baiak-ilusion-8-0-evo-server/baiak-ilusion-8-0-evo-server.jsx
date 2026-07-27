import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-0-evo-server');
}

export default function BaiakIlusion80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-0-evo-server" />;
}
