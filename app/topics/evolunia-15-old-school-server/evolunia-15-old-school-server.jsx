import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-old-school-server');
}

export default function Evolunia15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-old-school-server" />;
}
