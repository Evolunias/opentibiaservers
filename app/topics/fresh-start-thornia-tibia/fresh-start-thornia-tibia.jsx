import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-tibia');
}

export default function FreshStartThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-tibia" />;
}
