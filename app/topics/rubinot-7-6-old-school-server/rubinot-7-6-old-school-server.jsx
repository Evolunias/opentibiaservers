import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-old-school-server');
}

export default function Rubinot76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-old-school-server" />;
}
