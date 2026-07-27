import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-download');
}

export default function CustomThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-download" />;
}
