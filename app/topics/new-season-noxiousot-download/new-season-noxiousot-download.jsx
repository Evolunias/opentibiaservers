import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-download');
}

export default function NewSeasonNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-download" />;
}
