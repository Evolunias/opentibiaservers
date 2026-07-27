import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-low-exp-server');
}

export default function Archlight84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-low-exp-server" />;
}
