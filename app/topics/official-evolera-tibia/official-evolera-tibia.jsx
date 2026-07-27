import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-tibia');
}

export default function OfficialEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-tibia" />;
}
