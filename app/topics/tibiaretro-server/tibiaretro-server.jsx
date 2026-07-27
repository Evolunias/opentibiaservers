import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-server');
}

export default function TibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-server" />;
}
