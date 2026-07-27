import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-old-school-server');
}

export default function Alastera84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-old-school-server" />;
}
