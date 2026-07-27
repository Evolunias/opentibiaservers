import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-old-school-server');
}

export default function Rubinot13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-old-school-server" />;
}
