import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-old-school-server');
}

export default function Thaisot74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-old-school-server" />;
}
