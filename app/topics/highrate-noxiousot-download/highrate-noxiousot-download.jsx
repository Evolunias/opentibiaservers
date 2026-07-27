import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-download');
}

export default function HighrateNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-download" />;
}
