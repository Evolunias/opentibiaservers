import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-tibia');
}

export default function FreshStartEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-tibia" />;
}
