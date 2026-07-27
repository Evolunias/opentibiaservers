import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-download');
}

export default function ArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="archlight-download" />;
}
