import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-old-school-server');
}

export default function Empirebr96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-old-school-server" />;
}
