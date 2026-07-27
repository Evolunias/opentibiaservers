import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-old-school-server');
}

export default function Empirebr11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-old-school-server" />;
}
