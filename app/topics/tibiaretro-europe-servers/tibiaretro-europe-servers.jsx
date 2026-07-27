import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-europe-servers');
}

export default function TibiaretroEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-europe-servers" />;
}
