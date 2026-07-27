import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-old-school-server');
}

export default function Nostalther84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-old-school-server" />;
}
