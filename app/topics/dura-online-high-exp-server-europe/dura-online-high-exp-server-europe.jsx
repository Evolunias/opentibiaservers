import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-high-exp-server-europe');
}

export default function DuraOnlineHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-high-exp-server-europe" />;
}
