import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-open-tibia');
}

export default function CustomNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-open-tibia" />;
}
