import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-high-exp-server');
}

export default function Archlight14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-high-exp-server" />;
}
