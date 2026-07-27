import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-high-exp-server');
}

export default function DuraOnline11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-high-exp-server" />;
}
