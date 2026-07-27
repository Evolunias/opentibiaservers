import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-72-old-school-server');
}

export default function Empirebr772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-72-old-school-server" />;
}
