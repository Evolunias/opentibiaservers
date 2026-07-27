import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-old-school-server');
}

export default function Rubinot81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-old-school-server" />;
}
