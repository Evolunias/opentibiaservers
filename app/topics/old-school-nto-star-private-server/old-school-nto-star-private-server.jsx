import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-private-server');
}

export default function OldSchoolNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-private-server" />;
}
