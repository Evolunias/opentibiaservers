import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-old-school-server');
}

export default function Rubinot772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-old-school-server" />;
}
