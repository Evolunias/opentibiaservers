import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-client');
}

export default function OldSchoolThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-client" />;
}
