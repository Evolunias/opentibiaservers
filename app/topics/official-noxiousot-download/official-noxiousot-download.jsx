import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-download');
}

export default function OfficialNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-download" />;
}
