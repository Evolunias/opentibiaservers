import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-old-school-server');
}

export default function Nostalther12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-old-school-server" />;
}
