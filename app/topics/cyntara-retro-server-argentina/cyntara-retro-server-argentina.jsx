import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-argentina');
}

export default function CyntaraRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-argentina" />;
}
