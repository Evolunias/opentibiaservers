import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-download');
}

export default function OfficialSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-download" />;
}
