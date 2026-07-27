import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-old-school-server');
}

export default function Evolunia772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-old-school-server" />;
}
