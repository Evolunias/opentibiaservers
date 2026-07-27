import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibiame-server');
}

export default function LowExpTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibiame-server" />;
}
