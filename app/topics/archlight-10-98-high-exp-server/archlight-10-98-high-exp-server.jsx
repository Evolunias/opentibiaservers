import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-high-exp-server');
}

export default function Archlight1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-high-exp-server" />;
}
