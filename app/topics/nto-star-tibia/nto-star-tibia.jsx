import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-tibia');
}

export default function NtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-tibia" />;
}
