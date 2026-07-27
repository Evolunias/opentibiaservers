import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-france');
}

export default function EvoleraOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-france" />;
}
