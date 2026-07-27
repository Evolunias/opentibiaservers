import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-old-school-server');
}

export default function InfernalOt14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-old-school-server" />;
}
