import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-argentina');
}

export default function OldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-argentina" />;
}
