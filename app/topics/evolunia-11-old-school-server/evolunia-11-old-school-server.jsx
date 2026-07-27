import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-old-school-server');
}

export default function Evolunia11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-old-school-server" />;
}
