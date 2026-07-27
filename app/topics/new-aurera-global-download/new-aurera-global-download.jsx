import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-download');
}

export default function NewAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-download" />;
}
