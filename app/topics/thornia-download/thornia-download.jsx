import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-download');
}

export default function ThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="thornia-download" />;
}
