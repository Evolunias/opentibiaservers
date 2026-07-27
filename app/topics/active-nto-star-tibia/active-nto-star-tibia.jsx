import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-tibia');
}

export default function ActiveNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-tibia" />;
}
