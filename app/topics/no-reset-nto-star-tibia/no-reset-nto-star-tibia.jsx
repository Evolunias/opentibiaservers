import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-tibia');
}

export default function NoResetNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-tibia" />;
}
