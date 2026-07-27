import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-poland');
}

export default function HarmoniaOtOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-poland" />;
}
