import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-download');
}

export default function OfficialCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-canob-download" />;
}
