import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-old-school-server');
}

export default function Nostalther15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-old-school-server" />;
}
