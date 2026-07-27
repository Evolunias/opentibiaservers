import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-germany');
}

export default function EvoleraOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-germany" />;
}
