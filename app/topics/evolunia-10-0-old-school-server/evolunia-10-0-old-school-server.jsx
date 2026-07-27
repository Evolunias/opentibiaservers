import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-old-school-server');
}

export default function Evolunia100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-old-school-server" />;
}
