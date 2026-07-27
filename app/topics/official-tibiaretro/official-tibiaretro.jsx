import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro');
}

export default function OfficialTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro" />;
}
