import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-download');
}

export default function CustomAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-download" />;
}
