import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-germany');
}

export default function HarmoniaOtOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-germany" />;
}
