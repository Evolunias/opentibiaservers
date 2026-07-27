import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-tibia');
}

export default function CustomEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-tibia" />;
}
