import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-tibia');
}

export default function KasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-tibia" />;
}
