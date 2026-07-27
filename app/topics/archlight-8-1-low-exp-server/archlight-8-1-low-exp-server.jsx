import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-low-exp-server');
}

export default function Archlight81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-low-exp-server" />;
}
