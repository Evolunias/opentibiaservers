import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-canada');
}

export default function TibiaretroFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-canada" />;
}
