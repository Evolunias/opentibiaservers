import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-low-exp-server');
}

export default function DuraOnline15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-low-exp-server" />;
}
