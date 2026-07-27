import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-chile-servers');
}

export default function TibiaretroChileServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-chile-servers" />;
}
