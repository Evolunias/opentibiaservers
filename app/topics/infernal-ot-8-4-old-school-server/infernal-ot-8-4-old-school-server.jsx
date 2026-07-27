import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-old-school-server');
}

export default function InfernalOt84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-old-school-server" />;
}
