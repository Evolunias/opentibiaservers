import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-client');
}

export default function OfficialTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-client" />;
}
