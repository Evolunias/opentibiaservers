import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-france-servers');
}

export default function TibiaretroFranceServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-france-servers" />;
}
