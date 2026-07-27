import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-high-exp-server');
}

export default function DuraOnline13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-high-exp-server" />;
}
