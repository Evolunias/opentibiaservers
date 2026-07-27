import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-tibia');
}

export default function NewNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-tibia" />;
}
