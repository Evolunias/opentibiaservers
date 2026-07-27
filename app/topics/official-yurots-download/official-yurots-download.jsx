import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-download');
}

export default function OfficialYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-download" />;
}
