import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-download');
}

export default function BestArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-download" />;
}
