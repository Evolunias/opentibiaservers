import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-europe');
}

export default function HarmoniaOtOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-europe" />;
}
