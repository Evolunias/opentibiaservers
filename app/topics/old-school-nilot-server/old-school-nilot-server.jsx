import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-server');
}

export default function OldSchoolNilotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-server" />;
}
