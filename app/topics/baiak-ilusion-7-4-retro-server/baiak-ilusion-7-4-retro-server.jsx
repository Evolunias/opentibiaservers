import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-4-retro-server');
}

export default function BaiakIlusion74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-4-retro-server" />;
}
