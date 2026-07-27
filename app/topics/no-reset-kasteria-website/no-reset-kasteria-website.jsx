import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-website');
}

export default function NoResetKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-website" />;
}
