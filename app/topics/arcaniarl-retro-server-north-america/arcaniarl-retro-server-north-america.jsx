import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-north-america');
}

export default function ArcaniarlRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-north-america" />;
}
