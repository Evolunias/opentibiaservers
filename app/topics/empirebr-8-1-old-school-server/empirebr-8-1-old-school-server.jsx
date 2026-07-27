import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-old-school-server');
}

export default function Empirebr81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-old-school-server" />;
}
