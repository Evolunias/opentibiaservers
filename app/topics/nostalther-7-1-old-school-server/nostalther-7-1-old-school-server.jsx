import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-old-school-server');
}

export default function Nostalther71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-old-school-server" />;
}
