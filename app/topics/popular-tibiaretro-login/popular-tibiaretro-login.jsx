import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-login');
}

export default function PopularTibiaretroLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-login" />;
}
