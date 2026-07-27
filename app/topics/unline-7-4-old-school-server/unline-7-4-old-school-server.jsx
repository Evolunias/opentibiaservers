import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-old-school-server');
}

export default function Unline74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-old-school-server" />;
}
