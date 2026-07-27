import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-high-exp-server');
}

export default function DuraOnline100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-high-exp-server" />;
}
