import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-download');
}

export default function NewNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-download" />;
}
