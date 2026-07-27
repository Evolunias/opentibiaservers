import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-old-school-server');
}

export default function InfernalOt71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-old-school-server" />;
}
