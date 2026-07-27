import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-server');
}

export default function PopularTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-server" />;
}
