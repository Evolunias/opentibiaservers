import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-download');
}

export default function LowrateOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-download" />;
}
