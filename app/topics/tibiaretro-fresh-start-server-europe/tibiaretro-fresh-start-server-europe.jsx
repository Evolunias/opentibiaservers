import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-europe');
}

export default function TibiaretroFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-europe" />;
}
