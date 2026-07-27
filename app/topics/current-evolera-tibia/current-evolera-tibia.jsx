import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-tibia');
}

export default function CurrentEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-tibia" />;
}
