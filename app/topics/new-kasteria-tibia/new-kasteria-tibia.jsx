import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-tibia');
}

export default function NewKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-tibia" />;
}
