import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-canada');
}

export default function KasteriaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-canada" />;
}
