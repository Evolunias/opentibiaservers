import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-download');
}

export default function NewKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-download" />;
}
