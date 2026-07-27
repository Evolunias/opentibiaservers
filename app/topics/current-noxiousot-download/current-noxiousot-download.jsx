import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-download');
}

export default function CurrentNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-download" />;
}
