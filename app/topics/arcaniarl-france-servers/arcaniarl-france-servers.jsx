import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-france-servers');
}

export default function ArcaniarlFranceServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-france-servers" />;
}
