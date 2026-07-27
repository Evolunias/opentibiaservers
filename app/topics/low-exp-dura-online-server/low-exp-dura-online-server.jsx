import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-dura-online-server');
}

export default function LowExpDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-dura-online-server" />;
}
