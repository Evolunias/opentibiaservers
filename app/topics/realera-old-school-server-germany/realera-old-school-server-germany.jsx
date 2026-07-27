import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-germany');
}

export default function RealeraOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-germany" />;
}
