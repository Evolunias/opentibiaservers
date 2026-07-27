import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-canada');
}

export default function NostaltherOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-canada" />;
}
