import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-old-school-server-europe');
}

export default function MediviaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-old-school-server-europe" />;
}
