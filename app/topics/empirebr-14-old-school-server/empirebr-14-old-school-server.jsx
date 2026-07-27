import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-old-school-server');
}

export default function Empirebr14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-old-school-server" />;
}
