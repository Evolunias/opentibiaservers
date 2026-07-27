import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-argentina');
}

export default function OldSchoolServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-argentina" />;
}
