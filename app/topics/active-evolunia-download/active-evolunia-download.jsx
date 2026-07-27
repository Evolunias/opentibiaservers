import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-download');
}

export default function ActiveEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-download" />;
}
