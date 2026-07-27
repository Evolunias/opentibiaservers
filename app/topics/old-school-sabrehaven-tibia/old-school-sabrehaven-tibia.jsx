import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-tibia');
}

export default function OldSchoolSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-tibia" />;
}
