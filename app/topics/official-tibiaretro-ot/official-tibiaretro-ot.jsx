import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-ot');
}

export default function OfficialTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-ot" />;
}
