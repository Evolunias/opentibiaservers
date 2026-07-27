import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-old-school-server');
}

export default function Empirebr15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-old-school-server" />;
}
