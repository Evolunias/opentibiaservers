import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-old-school-server');
}

export default function HarmoniaOt14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-old-school-server" />;
}
