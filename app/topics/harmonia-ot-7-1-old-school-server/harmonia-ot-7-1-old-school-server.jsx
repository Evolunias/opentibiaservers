import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-old-school-server');
}

export default function HarmoniaOt71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-old-school-server" />;
}
