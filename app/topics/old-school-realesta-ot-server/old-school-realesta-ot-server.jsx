import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-ot-server');
}

export default function OldSchoolRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-ot-server" />;
}
