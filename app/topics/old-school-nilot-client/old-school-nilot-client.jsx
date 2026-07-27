import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-client');
}

export default function OldSchoolNilotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-client" />;
}
