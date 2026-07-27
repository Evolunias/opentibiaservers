import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-tibia');
}

export default function CurrentKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-tibia" />;
}
