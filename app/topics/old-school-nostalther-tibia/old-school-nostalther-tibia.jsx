import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-tibia');
}

export default function OldSchoolNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-tibia" />;
}
