import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-download');
}

export default function CustomArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-download" />;
}
