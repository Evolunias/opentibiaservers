import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-open-tibia');
}

export default function OldSchoolEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-open-tibia" />;
}
