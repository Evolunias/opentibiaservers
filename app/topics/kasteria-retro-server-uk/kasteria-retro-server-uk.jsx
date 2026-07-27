import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-uk');
}

export default function KasteriaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-uk" />;
}
