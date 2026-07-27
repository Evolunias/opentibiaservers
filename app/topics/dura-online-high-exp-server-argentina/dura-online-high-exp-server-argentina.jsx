import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-high-exp-server-argentina');
}

export default function DuraOnlineHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-high-exp-server-argentina" />;
}
