import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-6-low-exp-server');
}

export default function DuraOnline86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-6-low-exp-server" />;
}
