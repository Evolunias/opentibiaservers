import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-evo-server');
}

export default function BaiakIlusion14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-evo-server" />;
}
