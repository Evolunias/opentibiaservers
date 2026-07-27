import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-open-tibia');
}

export default function OldSchoolElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-open-tibia" />;
}
