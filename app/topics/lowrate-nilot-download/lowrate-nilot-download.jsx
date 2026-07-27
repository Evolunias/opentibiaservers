import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-download');
}

export default function LowrateNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-download" />;
}
