import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-old-school-server');
}

export default function Empirebr100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-old-school-server" />;
}
