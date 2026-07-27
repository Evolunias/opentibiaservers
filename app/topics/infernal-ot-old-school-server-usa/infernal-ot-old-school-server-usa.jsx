import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-usa');
}

export default function InfernalOtOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-usa" />;
}
