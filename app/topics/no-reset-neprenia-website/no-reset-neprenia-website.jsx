import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-website');
}

export default function NoResetNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-website" />;
}
