import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-latin-america');
}

export default function CyntaraRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-latin-america" />;
}
