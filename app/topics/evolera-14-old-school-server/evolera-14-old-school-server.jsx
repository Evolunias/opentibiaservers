import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-old-school-server');
}

export default function Evolera14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-old-school-server" />;
}
