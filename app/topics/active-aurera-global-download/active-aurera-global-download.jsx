import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-download');
}

export default function ActiveAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-download" />;
}
