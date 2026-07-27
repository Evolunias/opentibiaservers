import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-germany');
}

export default function OldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-germany" />;
}
