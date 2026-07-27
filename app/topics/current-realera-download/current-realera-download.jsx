import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-download');
}

export default function CurrentRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-realera-download" />;
}
