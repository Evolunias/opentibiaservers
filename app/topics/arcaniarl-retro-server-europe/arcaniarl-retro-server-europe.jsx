import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-europe');
}

export default function ArcaniarlRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-europe" />;
}
