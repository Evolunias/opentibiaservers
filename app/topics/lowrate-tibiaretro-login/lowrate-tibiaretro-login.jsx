import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-login');
}

export default function LowrateTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-login" />;
}
