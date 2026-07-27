import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-canada');
}

export default function EvoleraOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-canada" />;
}
