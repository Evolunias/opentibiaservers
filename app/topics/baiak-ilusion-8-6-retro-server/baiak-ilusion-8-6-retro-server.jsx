import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-6-retro-server');
}

export default function BaiakIlusion86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-6-retro-server" />;
}
