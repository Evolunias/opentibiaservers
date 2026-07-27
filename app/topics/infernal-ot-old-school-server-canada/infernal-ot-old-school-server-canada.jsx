import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-canada');
}

export default function InfernalOtOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-canada" />;
}
