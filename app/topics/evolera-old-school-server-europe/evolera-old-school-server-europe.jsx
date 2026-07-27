import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-europe');
}

export default function EvoleraOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-europe" />;
}
