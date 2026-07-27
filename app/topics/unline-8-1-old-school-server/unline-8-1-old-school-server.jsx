import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-old-school-server');
}

export default function Unline81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-old-school-server" />;
}
