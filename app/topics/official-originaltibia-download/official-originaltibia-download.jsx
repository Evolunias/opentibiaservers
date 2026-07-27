import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-download');
}

export default function OfficialOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-download" />;
}
