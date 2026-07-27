import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-old-school-server');
}

export default function Alastera13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-old-school-server" />;
}
