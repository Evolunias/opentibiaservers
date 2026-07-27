import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-private-server');
}

export default function OldSchoolAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-private-server" />;
}
