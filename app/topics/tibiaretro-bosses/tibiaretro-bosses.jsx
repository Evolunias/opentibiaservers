import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-bosses');
}

export default function TibiaretroBossesKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-bosses" />;
}
