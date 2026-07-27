import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-download');
}

export default function BestAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-download" />;
}
