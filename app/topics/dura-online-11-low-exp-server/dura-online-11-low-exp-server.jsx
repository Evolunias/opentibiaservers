import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-low-exp-server');
}

export default function DuraOnline11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-low-exp-server" />;
}
