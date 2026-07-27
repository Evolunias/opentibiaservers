import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-login');
}

export default function TopTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-login" />;
}
