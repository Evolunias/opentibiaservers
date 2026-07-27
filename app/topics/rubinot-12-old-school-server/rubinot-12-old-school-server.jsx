import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-old-school-server');
}

export default function Rubinot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-old-school-server" />;
}
