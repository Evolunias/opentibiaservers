import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-website');
}

export default function NoResetImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-website" />;
}
