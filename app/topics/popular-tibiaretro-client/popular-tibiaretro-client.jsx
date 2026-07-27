import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-client');
}

export default function PopularTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-client" />;
}
