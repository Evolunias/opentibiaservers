import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-france');
}

export default function ArcaniarlFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-france" />;
}
