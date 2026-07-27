import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-germany');
}

export default function InfernalOtOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-germany" />;
}
