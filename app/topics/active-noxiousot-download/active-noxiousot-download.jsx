import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-download');
}

export default function ActiveNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-download" />;
}
