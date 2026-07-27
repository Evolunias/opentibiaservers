import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-private-server');
}

export default function OldSchoolRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-private-server" />;
}
