import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-download');
}

export default function NewThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-download" />;
}
