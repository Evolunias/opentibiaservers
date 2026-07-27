import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-old-school-server');
}

export default function Thaisot13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-old-school-server" />;
}
