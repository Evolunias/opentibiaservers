import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-usa');
}

export default function EvoleraOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-usa" />;
}
