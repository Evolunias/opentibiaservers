import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-open-tibia');
}

export default function BestThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-open-tibia" />;
}
