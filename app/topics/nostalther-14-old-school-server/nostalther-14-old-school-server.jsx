import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-old-school-server');
}

export default function Nostalther14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-old-school-server" />;
}
