import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-open-tibia');
}

export default function NewNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-open-tibia" />;
}
