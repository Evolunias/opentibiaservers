import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-ot');
}

export default function NoResetNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-ot" />;
}
