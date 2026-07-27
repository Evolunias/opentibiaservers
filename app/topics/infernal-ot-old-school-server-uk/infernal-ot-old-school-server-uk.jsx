import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-uk');
}

export default function InfernalOtOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-uk" />;
}
