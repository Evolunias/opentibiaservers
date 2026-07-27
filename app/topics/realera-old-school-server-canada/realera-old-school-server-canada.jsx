import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-canada');
}

export default function RealeraOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-canada" />;
}
