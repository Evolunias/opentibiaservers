import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-download');
}

export default function PopularEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-download" />;
}
