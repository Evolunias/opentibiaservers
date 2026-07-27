import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-open-tibia');
}

export default function OldSchoolOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-open-tibia" />;
}
