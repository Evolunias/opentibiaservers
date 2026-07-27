import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-download');
}

export default function ArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-download" />;
}
