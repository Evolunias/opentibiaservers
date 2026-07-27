import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-ot-server');
}

export default function OldSchoolZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-ot-server" />;
}
