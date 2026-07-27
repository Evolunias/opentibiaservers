import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-old-school-server');
}

export default function Evolunia96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-old-school-server" />;
}
