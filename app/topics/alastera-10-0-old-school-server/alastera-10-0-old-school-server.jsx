import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-old-school-server');
}

export default function Alastera100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-old-school-server" />;
}
