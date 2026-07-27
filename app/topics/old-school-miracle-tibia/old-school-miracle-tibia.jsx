import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-tibia');
}

export default function OldSchoolMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-tibia" />;
}
