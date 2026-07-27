import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-download');
}

export default function CurrentThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-download" />;
}
