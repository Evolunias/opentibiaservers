import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-download');
}

export default function AureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-download" />;
}
