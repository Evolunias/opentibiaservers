import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-ot-server');
}

export default function OldSchoolImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-ot-server" />;
}
