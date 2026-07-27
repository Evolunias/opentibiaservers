import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-open-tibia');
}

export default function NtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-open-tibia" />;
}
