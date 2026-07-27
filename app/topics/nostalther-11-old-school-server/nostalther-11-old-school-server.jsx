import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-old-school-server');
}

export default function Nostalther11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-old-school-server" />;
}
