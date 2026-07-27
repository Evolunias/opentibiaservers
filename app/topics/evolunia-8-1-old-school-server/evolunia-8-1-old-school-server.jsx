import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-old-school-server');
}

export default function Evolunia81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-old-school-server" />;
}
