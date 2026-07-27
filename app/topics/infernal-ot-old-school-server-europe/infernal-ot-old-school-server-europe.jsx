import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-old-school-server-europe');
}

export default function InfernalOtOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-old-school-server-europe" />;
}
