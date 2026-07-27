import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-sweden-servers');
}

export default function TibiaretroSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-sweden-servers" />;
}
