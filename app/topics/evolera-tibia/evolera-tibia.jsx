import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-tibia');
}

export default function EvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="evolera-tibia" />;
}
