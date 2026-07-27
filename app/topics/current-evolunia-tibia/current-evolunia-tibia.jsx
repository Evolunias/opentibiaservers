import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-tibia');
}

export default function CurrentEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-tibia" />;
}
