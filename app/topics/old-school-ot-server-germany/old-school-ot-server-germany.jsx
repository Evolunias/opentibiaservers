import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-germany');
}

export default function OldSchoolOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-germany" />;
}
