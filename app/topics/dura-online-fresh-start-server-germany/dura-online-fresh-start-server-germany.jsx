import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-fresh-start-server-germany');
}

export default function DuraOnlineFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-fresh-start-server-germany" />;
}
