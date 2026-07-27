import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-baiak-server');
}

export default function Tibiaretro100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-baiak-server" />;
}
