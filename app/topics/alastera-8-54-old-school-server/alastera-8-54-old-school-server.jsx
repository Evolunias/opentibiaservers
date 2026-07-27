import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-54-old-school-server');
}

export default function Alastera854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-54-old-school-server" />;
}
