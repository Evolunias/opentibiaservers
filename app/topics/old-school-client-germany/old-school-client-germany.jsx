import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-client-germany');
}

export default function OldSchoolClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-client-germany" />;
}
