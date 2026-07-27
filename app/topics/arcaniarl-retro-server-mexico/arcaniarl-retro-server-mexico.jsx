import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-mexico');
}

export default function ArcaniarlRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-mexico" />;
}
