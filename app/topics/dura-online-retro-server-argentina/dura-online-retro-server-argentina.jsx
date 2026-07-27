import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-argentina');
}

export default function DuraOnlineRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-argentina" />;
}
