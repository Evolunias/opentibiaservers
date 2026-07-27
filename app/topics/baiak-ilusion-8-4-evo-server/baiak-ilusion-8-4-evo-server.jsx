import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-4-evo-server');
}

export default function BaiakIlusion84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-4-evo-server" />;
}
