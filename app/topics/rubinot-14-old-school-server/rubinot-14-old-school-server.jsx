import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-old-school-server');
}

export default function Rubinot14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-old-school-server" />;
}
