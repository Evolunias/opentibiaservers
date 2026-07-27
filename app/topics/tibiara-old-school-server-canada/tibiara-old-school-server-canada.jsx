import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-canada');
}

export default function TibiaraOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-canada" />;
}
