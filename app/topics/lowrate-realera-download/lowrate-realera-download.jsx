import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-download');
}

export default function LowrateRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-download" />;
}
