import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-website');
}

export default function NoResetNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-website" />;
}
