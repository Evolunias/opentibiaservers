import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-argentina-servers');
}

export default function TibiaretroArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-argentina-servers" />;
}
