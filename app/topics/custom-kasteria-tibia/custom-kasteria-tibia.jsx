import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-tibia');
}

export default function CustomKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-tibia" />;
}
