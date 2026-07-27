import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-client');
}

export default function OldSchoolMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-client" />;
}
