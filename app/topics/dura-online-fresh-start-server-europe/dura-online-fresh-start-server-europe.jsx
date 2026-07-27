import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-fresh-start-server-europe');
}

export default function DuraOnlineFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-fresh-start-server-europe" />;
}
