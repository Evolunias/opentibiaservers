import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-open-tibia');
}

export default function OldSchoolNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-open-tibia" />;
}
