import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-brazil');
}

export default function MediviaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-brazil" />;
}
