import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-tibia');
}

export default function ActiveKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-tibia" />;
}
