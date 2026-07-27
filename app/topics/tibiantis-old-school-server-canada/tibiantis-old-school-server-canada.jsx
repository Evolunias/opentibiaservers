import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-canada');
}

export default function TibiantisOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-canada" />;
}
