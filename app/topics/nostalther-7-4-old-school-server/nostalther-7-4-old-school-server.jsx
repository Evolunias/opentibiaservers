import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-4-old-school-server');
}

export default function Nostalther74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-4-old-school-server" />;
}
