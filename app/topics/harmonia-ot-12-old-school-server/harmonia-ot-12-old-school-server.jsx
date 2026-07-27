import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-old-school-server');
}

export default function HarmoniaOt12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-old-school-server" />;
}
