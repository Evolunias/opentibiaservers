import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-poland');
}

export default function TibiaretroFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-poland" />;
}
