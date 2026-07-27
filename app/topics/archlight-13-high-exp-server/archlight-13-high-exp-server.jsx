import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-high-exp-server');
}

export default function Archlight13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-high-exp-server" />;
}
