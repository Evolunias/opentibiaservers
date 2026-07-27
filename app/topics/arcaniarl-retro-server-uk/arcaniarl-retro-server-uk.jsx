import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-uk');
}

export default function ArcaniarlRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-uk" />;
}
