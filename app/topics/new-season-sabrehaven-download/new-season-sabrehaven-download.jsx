import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-download');
}

export default function NewSeasonSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-download" />;
}
