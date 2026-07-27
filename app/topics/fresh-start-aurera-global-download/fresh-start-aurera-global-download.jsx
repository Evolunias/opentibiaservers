import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-download');
}

export default function FreshStartAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-download" />;
}
