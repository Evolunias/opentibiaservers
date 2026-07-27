import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-old-school-server-south-america');
}

export default function EvoleraOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-old-school-server-south-america" />;
}
