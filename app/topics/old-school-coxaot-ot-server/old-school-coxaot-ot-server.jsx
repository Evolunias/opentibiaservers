import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-ot-server');
}

export default function OldSchoolCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-ot-server" />;
}
