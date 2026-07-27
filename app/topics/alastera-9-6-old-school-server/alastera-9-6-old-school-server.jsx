import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-old-school-server');
}

export default function Alastera96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-old-school-server" />;
}
