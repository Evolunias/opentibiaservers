import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-98-old-school-server');
}

export default function Nostalther1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-98-old-school-server" />;
}
