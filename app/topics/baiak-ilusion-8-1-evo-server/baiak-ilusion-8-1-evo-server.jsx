import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-1-evo-server');
}

export default function BaiakIlusion81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-1-evo-server" />;
}
