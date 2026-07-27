import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-tibia');
}

export default function OldSchoolMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-tibia" />;
}
