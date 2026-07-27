import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-website');
}

export default function NoResetThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-website" />;
}
