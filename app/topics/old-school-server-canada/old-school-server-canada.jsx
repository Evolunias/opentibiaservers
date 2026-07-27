import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-canada');
}

export default function OldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-canada" />;
}
