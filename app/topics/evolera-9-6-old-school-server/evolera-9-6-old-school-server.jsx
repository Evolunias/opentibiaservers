import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-old-school-server');
}

export default function Evolera96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-old-school-server" />;
}
