import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-download');
}

export default function LowrateNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-download" />;
}
