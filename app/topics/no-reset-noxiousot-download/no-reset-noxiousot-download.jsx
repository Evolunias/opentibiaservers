import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-download');
}

export default function NoResetNoxiousotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-download" />;
}
