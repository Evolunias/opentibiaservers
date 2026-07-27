import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-98-old-school-server');
}

export default function InfernalOt1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-98-old-school-server" />;
}
