import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-old-school-server');
}

export default function Evolunia12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-old-school-server" />;
}
