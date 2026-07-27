import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-download');
}

export default function CurrentArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-download" />;
}
