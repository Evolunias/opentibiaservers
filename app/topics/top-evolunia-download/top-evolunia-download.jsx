import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-download');
}

export default function TopEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-download" />;
}
