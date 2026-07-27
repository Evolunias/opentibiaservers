import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-download');
}

export default function CurrentAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-download" />;
}
