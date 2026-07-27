import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-download');
}

export default function OfficialThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-download" />;
}
