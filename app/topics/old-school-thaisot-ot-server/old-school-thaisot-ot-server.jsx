import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-ot-server');
}

export default function OldSchoolThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-ot-server" />;
}
