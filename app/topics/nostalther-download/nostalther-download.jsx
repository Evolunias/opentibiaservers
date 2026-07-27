import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-download');
}

export default function NostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="nostalther-download" />;
}
