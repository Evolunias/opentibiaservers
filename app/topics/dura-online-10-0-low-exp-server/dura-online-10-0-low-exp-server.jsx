import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-low-exp-server');
}

export default function DuraOnline100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-low-exp-server" />;
}
