import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-download');
}

export default function OfficialEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-download" />;
}
