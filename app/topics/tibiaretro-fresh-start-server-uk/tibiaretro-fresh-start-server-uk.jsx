import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-uk');
}

export default function TibiaretroFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-uk" />;
}
