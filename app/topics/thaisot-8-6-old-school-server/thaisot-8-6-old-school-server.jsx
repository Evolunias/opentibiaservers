import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-old-school-server');
}

export default function Thaisot86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-old-school-server" />;
}
