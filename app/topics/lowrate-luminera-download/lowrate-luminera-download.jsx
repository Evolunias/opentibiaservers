import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-download');
}

export default function LowrateLumineraDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-download" />;
}
