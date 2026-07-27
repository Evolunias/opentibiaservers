import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-download');
}

export default function FreshStartTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-download" />;
}
