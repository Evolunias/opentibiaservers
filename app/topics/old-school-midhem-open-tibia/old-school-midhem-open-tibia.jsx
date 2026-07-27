import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-open-tibia');
}

export default function OldSchoolMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-open-tibia" />;
}
