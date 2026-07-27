import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-retro-server');
}

export default function BaiakIlusion15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-retro-server" />;
}
