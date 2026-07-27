import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-canada');
}

export default function CyntaraRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-canada" />;
}
