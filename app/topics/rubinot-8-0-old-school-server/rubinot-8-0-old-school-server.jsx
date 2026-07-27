import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-old-school-server');
}

export default function Rubinot80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-old-school-server" />;
}
