import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-low-exp-server');
}

export default function DuraOnline14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-low-exp-server" />;
}
