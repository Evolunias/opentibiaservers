import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-old-school-server');
}

export default function InfernalOt12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-old-school-server" />;
}
