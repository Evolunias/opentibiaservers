import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-download');
}

export default function NoResetArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-download" />;
}
