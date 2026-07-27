import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-old-school-server');
}

export default function Empirebr74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-old-school-server" />;
}
