import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-download');
}

export default function RealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="realera-download" />;
}
