import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-low-exp-server');
}

export default function Archlight71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-low-exp-server" />;
}
