import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-download');
}

export default function OfficialAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-download" />;
}
