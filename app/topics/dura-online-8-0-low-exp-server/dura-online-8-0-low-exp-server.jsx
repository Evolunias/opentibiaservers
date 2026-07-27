import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-low-exp-server');
}

export default function DuraOnline80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-low-exp-server" />;
}
