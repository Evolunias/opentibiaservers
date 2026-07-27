import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-download');
}

export default function TopArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-download" />;
}
