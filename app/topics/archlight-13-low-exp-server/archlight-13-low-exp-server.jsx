import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-low-exp-server');
}

export default function Archlight13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-low-exp-server" />;
}
