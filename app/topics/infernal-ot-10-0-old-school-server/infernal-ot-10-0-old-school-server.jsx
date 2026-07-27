import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-old-school-server');
}

export default function InfernalOt100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-old-school-server" />;
}
