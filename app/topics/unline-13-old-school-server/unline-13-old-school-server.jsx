import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-old-school-server');
}

export default function Unline13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-old-school-server" />;
}
