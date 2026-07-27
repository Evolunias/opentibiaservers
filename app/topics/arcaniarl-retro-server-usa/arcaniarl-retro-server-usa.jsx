import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-usa');
}

export default function ArcaniarlRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-usa" />;
}
