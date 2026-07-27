import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-old-school-server');
}

export default function Evolunia71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-old-school-server" />;
}
