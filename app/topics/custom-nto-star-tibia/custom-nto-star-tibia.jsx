import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-tibia');
}

export default function CustomNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-tibia" />;
}
