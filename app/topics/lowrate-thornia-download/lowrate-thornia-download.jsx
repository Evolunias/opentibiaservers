import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-download');
}

export default function LowrateThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-download" />;
}
