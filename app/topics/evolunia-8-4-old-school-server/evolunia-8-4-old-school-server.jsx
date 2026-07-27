import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-old-school-server');
}

export default function Evolunia84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-old-school-server" />;
}
