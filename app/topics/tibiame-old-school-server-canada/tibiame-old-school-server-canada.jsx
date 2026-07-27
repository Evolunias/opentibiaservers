import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-canada');
}

export default function TibiameOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-canada" />;
}
