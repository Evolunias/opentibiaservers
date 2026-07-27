import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-download');
}

export default function LowrateEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-download" />;
}
