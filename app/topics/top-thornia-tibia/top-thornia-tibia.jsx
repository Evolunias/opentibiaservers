import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-tibia');
}

export default function TopThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-tibia" />;
}
