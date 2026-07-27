import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-dura-online-server');
}

export default function HighExpDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-dura-online-server" />;
}
