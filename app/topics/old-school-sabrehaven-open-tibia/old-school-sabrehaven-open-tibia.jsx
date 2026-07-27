import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-open-tibia');
}

export default function OldSchoolSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-open-tibia" />;
}
