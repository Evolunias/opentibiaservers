import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-sweden-server');
}

export default function TibiaretroSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-sweden-server" />;
}
