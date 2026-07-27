import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-website');
}

export default function NoResetCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-website" />;
}
