import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-tibia');
}

export default function OldSchoolElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-tibia" />;
}
