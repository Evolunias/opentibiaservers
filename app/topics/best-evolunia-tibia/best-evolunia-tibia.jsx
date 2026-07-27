import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-tibia');
}

export default function BestEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-tibia" />;
}
