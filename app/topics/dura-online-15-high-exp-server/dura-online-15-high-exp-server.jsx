import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-high-exp-server');
}

export default function DuraOnline15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-high-exp-server" />;
}
