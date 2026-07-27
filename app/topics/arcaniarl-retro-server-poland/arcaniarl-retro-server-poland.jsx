import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-poland');
}

export default function ArcaniarlRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-poland" />;
}
