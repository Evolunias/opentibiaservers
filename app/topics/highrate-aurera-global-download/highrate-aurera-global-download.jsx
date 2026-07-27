import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-download');
}

export default function HighrateAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-download" />;
}
