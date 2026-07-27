import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-evo-server');
}

export default function BaiakIlusion12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-evo-server" />;
}
