import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-tibia');
}

export default function OldSchoolEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-tibia" />;
}
