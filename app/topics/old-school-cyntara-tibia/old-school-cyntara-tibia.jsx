import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-tibia');
}

export default function OldSchoolCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-tibia" />;
}
