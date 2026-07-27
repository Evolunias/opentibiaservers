import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-tibia');
}

export default function TopKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-tibia" />;
}
