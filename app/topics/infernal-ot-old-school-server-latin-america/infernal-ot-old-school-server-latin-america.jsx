import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-latin-america');
}

export default function InfernalOtOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-latin-america" />;
}
