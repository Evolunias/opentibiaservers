import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-client');
}

export default function OldSchoolSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-client" />;
}
