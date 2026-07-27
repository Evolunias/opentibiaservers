import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-canada');
}

export default function ArcaniarlRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-canada" />;
}
