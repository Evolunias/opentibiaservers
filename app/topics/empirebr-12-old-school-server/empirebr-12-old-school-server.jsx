import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-old-school-server');
}

export default function Empirebr12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-old-school-server" />;
}
