import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-brazil');
}

export default function InfernalOtOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-brazil" />;
}
