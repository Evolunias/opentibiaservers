import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-open-tibia');
}

export default function OldSchoolDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-open-tibia" />;
}
