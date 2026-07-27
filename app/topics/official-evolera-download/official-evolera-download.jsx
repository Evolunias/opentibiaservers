import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-download');
}

export default function OfficialEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-download" />;
}
