import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-north-america');
}

export default function TibiaretroFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-north-america" />;
}
