import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-website');
}

export default function NoResetRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-website" />;
}
