import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-download');
}

export default function LowrateNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-download" />;
}
