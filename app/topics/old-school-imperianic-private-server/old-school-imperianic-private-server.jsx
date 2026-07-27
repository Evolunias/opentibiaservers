import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-private-server');
}

export default function OldSchoolImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-private-server" />;
}
