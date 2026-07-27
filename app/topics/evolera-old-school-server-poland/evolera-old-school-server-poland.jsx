import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-poland');
}

export default function EvoleraOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-poland" />;
}
