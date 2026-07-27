import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-download');
}

export default function PopularAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-download" />;
}
