import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-high-exp-server');
}

export default function Archlight12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-high-exp-server" />;
}
