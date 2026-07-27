import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-old-school-server');
}

export default function Thaisot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-old-school-server" />;
}
