import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fun-server');
}

export default function TibiaretroFunServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fun-server" />;
}
