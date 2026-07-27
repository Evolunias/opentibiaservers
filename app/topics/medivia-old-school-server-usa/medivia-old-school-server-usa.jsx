import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-usa');
}

export default function MediviaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-usa" />;
}
