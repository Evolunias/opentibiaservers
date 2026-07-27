import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-latin-america');
}

export default function TibiaretroFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-latin-america" />;
}
