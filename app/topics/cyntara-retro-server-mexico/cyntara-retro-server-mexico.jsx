import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-mexico');
}

export default function CyntaraRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-mexico" />;
}
