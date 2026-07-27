import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-tibia');
}

export default function BestEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-tibia" />;
}
