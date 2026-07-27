import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-canada');
}

export default function OldSchoolServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-canada" />;
}
