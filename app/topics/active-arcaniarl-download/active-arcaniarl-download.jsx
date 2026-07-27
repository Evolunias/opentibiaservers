import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-download');
}

export default function ActiveArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-download" />;
}
