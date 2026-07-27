import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-old-school-server');
}

export default function Evolunia14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-old-school-server" />;
}
