import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-old-school-server');
}

export default function Alastera12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-old-school-server" />;
}
