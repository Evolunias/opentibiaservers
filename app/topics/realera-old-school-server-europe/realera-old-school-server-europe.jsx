import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-europe');
}

export default function RealeraOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-europe" />;
}
