import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-poland');
}

export default function InfernalOtOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-poland" />;
}
