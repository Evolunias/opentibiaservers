import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-canada');
}

export default function RealestaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-canada" />;
}
