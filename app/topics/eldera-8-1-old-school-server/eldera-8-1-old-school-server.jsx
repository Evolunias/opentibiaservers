import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-old-school-server');
}

export default function Eldera81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-old-school-server" />;
}
