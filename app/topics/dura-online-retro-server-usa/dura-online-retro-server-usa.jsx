import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-usa');
}

export default function DuraOnlineRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-usa" />;
}
