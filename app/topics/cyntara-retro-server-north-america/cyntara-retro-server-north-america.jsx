import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-north-america');
}

export default function CyntaraRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-north-america" />;
}
