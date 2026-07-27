import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-north-america');
}

export default function MediviaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-north-america" />;
}
