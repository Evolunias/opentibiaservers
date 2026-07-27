import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-old-school-server');
}

export default function Thaisot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-old-school-server" />;
}
