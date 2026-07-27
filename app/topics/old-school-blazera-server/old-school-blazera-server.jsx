import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-server');
}

export default function OldSchoolBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-server" />;
}
