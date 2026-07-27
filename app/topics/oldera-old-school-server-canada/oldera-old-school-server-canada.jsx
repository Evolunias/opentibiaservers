import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-canada');
}

export default function OlderaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-canada" />;
}
