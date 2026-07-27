import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-download');
}

export default function PopularArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-download" />;
}
