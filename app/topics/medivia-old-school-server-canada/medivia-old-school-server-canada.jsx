import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-canada');
}

export default function MediviaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-canada" />;
}
