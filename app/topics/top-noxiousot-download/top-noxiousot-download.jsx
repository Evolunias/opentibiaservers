import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-download');
}

export default function TopNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-download" />;
}
