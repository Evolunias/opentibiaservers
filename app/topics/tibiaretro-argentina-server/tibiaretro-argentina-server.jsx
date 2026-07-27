import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-argentina-server');
}

export default function TibiaretroArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-argentina-server" />;
}
