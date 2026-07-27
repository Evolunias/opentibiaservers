import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-old-school-server');
}

export default function InfernalOt15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-old-school-server" />;
}
