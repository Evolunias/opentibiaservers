import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-download');
}

export default function FreshStartArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-download" />;
}
