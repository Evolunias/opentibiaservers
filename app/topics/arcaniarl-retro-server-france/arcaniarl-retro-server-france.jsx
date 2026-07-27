import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-france');
}

export default function ArcaniarlRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-france" />;
}
