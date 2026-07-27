import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-old-school-server');
}

export default function Rubinot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-old-school-server" />;
}
