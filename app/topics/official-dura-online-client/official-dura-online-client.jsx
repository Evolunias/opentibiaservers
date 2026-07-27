import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-client');
}

export default function OfficialDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-client" />;
}
