import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-server');
}

export default function OldSchoolZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-server" />;
}
