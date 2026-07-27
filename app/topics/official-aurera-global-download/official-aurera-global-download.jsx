import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-download');
}

export default function OfficialAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-download" />;
}
