import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-private-server');
}

export default function OldSchoolCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-private-server" />;
}
