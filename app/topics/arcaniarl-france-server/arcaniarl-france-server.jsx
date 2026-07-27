import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-france-server');
}

export default function ArcaniarlFranceServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-france-server" />;
}
