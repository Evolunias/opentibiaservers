import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-latin-america');
}

export default function EvoleraOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-latin-america" />;
}
