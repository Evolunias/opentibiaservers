import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-open-tibia');
}

export default function ActiveNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-open-tibia" />;
}
