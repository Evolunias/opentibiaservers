import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-tibia');
}

export default function OldSchoolCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-tibia" />;
}
