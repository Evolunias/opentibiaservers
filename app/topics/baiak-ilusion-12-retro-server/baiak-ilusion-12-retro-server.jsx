import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-retro-server');
}

export default function BaiakIlusion12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-retro-server" />;
}
