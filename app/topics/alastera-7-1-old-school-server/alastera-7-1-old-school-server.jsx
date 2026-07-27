import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-old-school-server');
}

export default function Alastera71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-old-school-server" />;
}
