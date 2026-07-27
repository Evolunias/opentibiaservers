import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-old-school-server');
}

export default function Evolunia80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-old-school-server" />;
}
