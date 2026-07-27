import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-canada');
}

export default function OriginaltibiaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-canada" />;
}
