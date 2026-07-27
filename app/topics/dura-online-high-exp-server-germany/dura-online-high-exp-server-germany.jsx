import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-high-exp-server-germany');
}

export default function DuraOnlineHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-high-exp-server-germany" />;
}
