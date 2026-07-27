import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-tibia');
}

export default function ActiveEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-tibia" />;
}
