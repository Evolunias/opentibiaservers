import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-download');
}

export default function TopAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-download" />;
}
