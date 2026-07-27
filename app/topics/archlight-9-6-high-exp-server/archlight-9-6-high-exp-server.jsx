import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-high-exp-server');
}

export default function Archlight96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-high-exp-server" />;
}
