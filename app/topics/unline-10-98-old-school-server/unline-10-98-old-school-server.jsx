import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-98-old-school-server');
}

export default function Unline1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-98-old-school-server" />;
}
