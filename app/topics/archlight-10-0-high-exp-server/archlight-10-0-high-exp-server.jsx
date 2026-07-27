import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-high-exp-server');
}

export default function Archlight100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-high-exp-server" />;
}
