import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-germany');
}

export default function DuraOnlineRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-germany" />;
}
