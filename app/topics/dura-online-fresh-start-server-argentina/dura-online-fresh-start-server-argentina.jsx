import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-fresh-start-server-argentina');
}

export default function DuraOnlineFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-fresh-start-server-argentina" />;
}
