import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-download');
}

export default function CustomEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-download" />;
}
