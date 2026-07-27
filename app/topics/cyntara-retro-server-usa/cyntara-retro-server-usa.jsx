import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-usa');
}

export default function CyntaraRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-usa" />;
}
