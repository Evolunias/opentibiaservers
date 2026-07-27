import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-brazil');
}

export default function HarmoniaOtOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-brazil" />;
}
