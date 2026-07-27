import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-poland');
}

export default function RealeraOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-poland" />;
}
