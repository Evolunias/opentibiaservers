import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-download');
}

export default function OfficialElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-download" />;
}
