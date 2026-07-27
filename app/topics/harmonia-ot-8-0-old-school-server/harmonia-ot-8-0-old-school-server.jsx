import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-old-school-server');
}

export default function HarmoniaOt80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-old-school-server" />;
}
