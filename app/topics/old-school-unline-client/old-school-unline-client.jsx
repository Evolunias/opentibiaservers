import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-client');
}

export default function OldSchoolUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-client" />;
}
