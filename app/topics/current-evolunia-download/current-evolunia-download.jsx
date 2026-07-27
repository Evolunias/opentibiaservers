import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-download');
}

export default function CurrentEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-download" />;
}
