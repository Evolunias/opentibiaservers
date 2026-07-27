import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-old-school-server');
}

export default function Unline96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-old-school-server" />;
}
