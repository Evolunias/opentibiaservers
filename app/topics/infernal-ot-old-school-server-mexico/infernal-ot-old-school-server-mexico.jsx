import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-mexico');
}

export default function InfernalOtOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-mexico" />;
}
