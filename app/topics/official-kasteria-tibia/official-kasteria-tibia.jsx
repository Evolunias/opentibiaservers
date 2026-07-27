import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-tibia');
}

export default function OfficialKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-tibia" />;
}
