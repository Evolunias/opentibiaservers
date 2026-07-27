import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-north-america');
}

export default function InfernalOtOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-north-america" />;
}
