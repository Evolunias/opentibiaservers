import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibiame-server');
}

export default function HighExpTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibiame-server" />;
}
