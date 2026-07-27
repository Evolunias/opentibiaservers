import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-old-school-server');
}

export default function InfernalOt11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-old-school-server" />;
}
