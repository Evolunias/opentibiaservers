import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-usa');
}

export default function OldSchoolServersUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-usa" />;
}
