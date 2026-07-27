import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-download');
}

export default function OfficialNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-download" />;
}
