import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-evo-server');
}

export default function BaiakIlusion11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-evo-server" />;
}
