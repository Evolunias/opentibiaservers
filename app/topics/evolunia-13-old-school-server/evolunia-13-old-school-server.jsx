import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-old-school-server');
}

export default function Evolunia13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-old-school-server" />;
}
