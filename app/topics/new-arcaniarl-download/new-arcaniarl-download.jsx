import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-download');
}

export default function NewArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-download" />;
}
