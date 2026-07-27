import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-uk');
}

export default function DuraOnlineRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-uk" />;
}
