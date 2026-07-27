import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-client');
}

export default function OldSchoolZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-client" />;
}
