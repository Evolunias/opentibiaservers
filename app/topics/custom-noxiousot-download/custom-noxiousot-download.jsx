import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-download');
}

export default function CustomNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-download" />;
}
