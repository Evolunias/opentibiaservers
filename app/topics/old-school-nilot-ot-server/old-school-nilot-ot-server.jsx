import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-ot-server');
}

export default function OldSchoolNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-ot-server" />;
}
