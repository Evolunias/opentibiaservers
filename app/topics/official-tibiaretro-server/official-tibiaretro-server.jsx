import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-server');
}

export default function OfficialTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-server" />;
}
