import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-europe');
}

export default function DuraOnlineRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-europe" />;
}
