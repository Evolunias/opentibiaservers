import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-tibia');
}

export default function FreshStartEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-tibia" />;
}
