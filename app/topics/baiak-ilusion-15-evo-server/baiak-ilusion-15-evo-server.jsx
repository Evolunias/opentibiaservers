import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-evo-server');
}

export default function BaiakIlusion15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-evo-server" />;
}
