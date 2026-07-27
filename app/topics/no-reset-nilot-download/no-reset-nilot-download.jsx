import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-download');
}

export default function NoResetNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-download" />;
}
