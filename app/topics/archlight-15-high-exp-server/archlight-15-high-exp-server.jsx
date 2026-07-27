import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-high-exp-server');
}

export default function Archlight15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-high-exp-server" />;
}
