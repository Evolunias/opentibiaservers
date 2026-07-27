import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-download');
}

export default function HighrateEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-download" />;
}
