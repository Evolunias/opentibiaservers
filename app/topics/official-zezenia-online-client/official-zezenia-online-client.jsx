import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-client');
}

export default function OfficialZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-client" />;
}
