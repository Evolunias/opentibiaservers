import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-download');
}

export default function NoResetEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-download" />;
}
