import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-germany-servers');
}

export default function TibiaretroGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-germany-servers" />;
}
