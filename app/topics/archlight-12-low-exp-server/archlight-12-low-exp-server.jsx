import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-low-exp-server');
}

export default function Archlight12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-low-exp-server" />;
}
