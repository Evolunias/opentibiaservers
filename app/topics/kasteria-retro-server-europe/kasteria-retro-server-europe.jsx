import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-europe');
}

export default function KasteriaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-europe" />;
}
