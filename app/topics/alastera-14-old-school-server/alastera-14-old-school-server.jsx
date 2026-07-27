import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-old-school-server');
}

export default function Alastera14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-old-school-server" />;
}
