import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-login');
}

export default function OfficialTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-login" />;
}
