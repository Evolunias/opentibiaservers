import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-open-tibia');
}

export default function OldSchoolCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-open-tibia" />;
}
