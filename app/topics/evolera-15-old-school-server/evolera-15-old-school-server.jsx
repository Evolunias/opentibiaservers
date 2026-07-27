import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-old-school-server');
}

export default function Evolera15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-old-school-server" />;
}
