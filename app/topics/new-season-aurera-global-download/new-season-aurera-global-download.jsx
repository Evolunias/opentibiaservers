import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-download');
}

export default function NewSeasonAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-download" />;
}
