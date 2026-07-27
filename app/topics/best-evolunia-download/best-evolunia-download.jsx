import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-download');
}

export default function BestEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-download" />;
}
