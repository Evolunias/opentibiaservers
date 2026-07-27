import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-usa');
}

export default function OldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-usa" />;
}
