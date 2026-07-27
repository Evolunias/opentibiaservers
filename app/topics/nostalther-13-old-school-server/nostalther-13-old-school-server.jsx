import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-old-school-server');
}

export default function Nostalther13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-old-school-server" />;
}
