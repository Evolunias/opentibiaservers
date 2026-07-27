import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-brazil');
}

export default function CyntaraRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-brazil" />;
}
