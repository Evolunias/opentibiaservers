import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-old-school-server');
}

export default function Unline14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-old-school-server" />;
}
