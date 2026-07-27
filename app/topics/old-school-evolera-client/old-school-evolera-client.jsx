import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-client');
}

export default function OldSchoolEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-client" />;
}
