import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-tibia');
}

export default function OldSchoolEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-tibia" />;
}
