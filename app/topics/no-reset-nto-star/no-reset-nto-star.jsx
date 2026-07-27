import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star');
}

export default function NoResetNtoStarKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star" />;
}
