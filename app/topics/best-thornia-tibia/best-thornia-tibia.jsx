import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-tibia');
}

export default function BestThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-tibia" />;
}
