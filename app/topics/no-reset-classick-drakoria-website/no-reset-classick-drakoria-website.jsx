import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-website');
}

export default function NoResetClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-website" />;
}
