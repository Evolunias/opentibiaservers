import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-private-server');
}

export default function OldSchoolDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-private-server" />;
}
