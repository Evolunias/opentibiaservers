import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-old-school-server');
}

export default function HarmoniaOt81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-old-school-server" />;
}
