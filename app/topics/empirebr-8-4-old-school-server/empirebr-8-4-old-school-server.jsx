import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-old-school-server');
}

export default function Empirebr84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-old-school-server" />;
}
