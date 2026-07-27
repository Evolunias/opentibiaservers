import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-france');
}

export default function InfernalOtOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-france" />;
}
