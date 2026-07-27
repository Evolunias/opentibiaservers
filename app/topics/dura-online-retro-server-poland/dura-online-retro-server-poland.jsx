import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-poland');
}

export default function DuraOnlineRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-poland" />;
}
