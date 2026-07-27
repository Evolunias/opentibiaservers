import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-tibia');
}

export default function CurrentThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-tibia" />;
}
