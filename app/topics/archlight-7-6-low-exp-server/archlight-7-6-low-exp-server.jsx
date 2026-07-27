import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-low-exp-server');
}

export default function Archlight76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-low-exp-server" />;
}
