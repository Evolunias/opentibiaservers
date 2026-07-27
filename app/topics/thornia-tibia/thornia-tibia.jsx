import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-tibia');
}

export default function ThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="thornia-tibia" />;
}
