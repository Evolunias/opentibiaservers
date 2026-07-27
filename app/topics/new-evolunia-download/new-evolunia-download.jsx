import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-download');
}

export default function NewEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-download" />;
}
