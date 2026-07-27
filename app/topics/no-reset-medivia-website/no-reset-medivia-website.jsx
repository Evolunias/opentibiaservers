import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-website');
}

export default function NoResetMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-website" />;
}
