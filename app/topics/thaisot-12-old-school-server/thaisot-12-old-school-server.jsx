import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-old-school-server');
}

export default function Thaisot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-old-school-server" />;
}
