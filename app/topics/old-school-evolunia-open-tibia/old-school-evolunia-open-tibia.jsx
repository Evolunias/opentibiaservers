import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-open-tibia');
}

export default function OldSchoolEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-open-tibia" />;
}
