import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-old-school-server');
}

export default function Rubinot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-old-school-server" />;
}
