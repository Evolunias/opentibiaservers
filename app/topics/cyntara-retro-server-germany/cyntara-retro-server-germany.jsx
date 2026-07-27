import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-germany');
}

export default function CyntaraRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-germany" />;
}
