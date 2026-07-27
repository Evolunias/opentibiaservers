import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-retro-server');
}

export default function BaiakIlusion11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-retro-server" />;
}
