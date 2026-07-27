import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-ot-server');
}

export default function OldSchoolElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-ot-server" />;
}
