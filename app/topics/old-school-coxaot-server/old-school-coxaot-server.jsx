import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-server');
}

export default function OldSchoolCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-server" />;
}
