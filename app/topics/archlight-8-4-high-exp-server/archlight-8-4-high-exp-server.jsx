import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-high-exp-server');
}

export default function Archlight84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-high-exp-server" />;
}
