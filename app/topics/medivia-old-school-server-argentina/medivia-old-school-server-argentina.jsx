import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-argentina');
}

export default function MediviaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-argentina" />;
}
