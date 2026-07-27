import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-old-school-server');
}

export default function Evolera71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-old-school-server" />;
}
