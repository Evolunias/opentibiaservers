import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-old-school-server');
}

export default function Alastera15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-old-school-server" />;
}
