import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-ot');
}

export default function OldSchoolEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-ot" />;
}
