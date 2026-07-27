import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-open-tibia');
}

export default function OldSchoolCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-open-tibia" />;
}
