import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-chile-server');
}

export default function TibiaretroChileServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-chile-server" />;
}
