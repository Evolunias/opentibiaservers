import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-download');
}

export default function LowrateNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-download" />;
}
