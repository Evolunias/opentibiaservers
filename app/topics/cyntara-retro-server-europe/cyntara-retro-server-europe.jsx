import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-europe');
}

export default function CyntaraRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-europe" />;
}
