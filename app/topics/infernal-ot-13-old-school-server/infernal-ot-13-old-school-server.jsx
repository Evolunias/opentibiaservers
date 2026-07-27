import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-old-school-server');
}

export default function InfernalOt13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-old-school-server" />;
}
