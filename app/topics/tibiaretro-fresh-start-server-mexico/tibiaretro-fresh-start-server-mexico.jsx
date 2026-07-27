import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-mexico');
}

export default function TibiaretroFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-mexico" />;
}
