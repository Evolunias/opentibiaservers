import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-canada');
}

export default function NepreniaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-canada" />;
}
