import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-private-server');
}

export default function OldSchoolElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-private-server" />;
}
