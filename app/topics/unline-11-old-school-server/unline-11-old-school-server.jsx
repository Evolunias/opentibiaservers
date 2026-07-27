import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-old-school-server');
}

export default function Unline11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-old-school-server" />;
}
