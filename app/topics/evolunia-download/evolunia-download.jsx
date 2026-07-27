import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-download');
}

export default function EvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="evolunia-download" />;
}
