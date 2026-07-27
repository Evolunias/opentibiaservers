import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-download');
}

export default function LowrateArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-download" />;
}
