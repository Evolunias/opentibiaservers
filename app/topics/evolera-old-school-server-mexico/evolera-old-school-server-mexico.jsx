import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-mexico');
}

export default function EvoleraOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-mexico" />;
}
