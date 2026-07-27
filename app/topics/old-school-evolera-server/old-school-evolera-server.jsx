import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-server');
}

export default function OldSchoolEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-server" />;
}
