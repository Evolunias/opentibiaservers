import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-ots');
}

export default function OfficialTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-ots" />;
}
