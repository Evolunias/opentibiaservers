import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-baiak-server');
}

export default function Tibiaretro13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-baiak-server" />;
}
