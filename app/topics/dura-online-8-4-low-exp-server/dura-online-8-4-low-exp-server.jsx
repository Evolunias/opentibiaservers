import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-4-low-exp-server');
}

export default function DuraOnline84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-4-low-exp-server" />;
}
