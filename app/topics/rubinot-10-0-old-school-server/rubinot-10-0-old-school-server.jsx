import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-old-school-server');
}

export default function Rubinot100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-old-school-server" />;
}
