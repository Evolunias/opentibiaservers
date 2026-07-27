import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-low-exp-server');
}

export default function Archlight11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-low-exp-server" />;
}
