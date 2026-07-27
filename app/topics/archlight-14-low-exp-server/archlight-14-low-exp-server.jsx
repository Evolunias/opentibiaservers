import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-low-exp-server');
}

export default function Archlight14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-low-exp-server" />;
}
