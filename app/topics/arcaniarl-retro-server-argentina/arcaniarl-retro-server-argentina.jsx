import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-argentina');
}

export default function ArcaniarlRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-argentina" />;
}
