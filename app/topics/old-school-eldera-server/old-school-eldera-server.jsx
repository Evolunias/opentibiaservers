import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-server');
}

export default function OldSchoolElderaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-server" />;
}
