import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-open-tibia');
}

export default function OldSchoolThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-open-tibia" />;
}
