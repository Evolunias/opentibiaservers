import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-germany');
}

export default function MediviaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-germany" />;
}
