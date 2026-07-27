import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-mexico');
}

export default function DuraOnlineRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-mexico" />;
}
