import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-download');
}

export default function NepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="neprenia-download" />;
}
