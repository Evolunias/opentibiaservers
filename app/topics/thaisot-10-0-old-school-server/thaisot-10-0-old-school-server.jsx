import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-old-school-server');
}

export default function Thaisot100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-old-school-server" />;
}
