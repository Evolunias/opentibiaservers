import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-open-tibia');
}

export default function OldSchoolCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-open-tibia" />;
}
