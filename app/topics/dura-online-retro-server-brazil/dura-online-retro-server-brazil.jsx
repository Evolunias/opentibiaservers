import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-brazil');
}

export default function DuraOnlineRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-brazil" />;
}
