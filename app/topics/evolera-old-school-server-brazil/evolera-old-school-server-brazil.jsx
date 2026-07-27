import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-brazil');
}

export default function EvoleraOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-brazil" />;
}
