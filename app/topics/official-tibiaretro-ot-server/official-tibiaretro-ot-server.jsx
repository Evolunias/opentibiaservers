import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-ot-server');
}

export default function OfficialTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-ot-server" />;
}
