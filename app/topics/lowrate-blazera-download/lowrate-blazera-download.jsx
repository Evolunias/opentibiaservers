import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-download');
}

export default function LowrateBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-download" />;
}
