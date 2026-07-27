import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-high-exp-server');
}

export default function DuraOnline14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-high-exp-server" />;
}
