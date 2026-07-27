import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-old-school-server');
}

export default function InfernalOt772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-old-school-server" />;
}
