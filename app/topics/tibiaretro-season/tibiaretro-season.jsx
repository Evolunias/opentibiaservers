import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-season');
}

export default function TibiaretroSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-season" />;
}
