import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-old-school-server');
}

export default function HarmoniaOt13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-old-school-server" />;
}
