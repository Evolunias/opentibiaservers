import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-cyntara-server');
}

export default function EvoCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="evo-cyntara-server" />;
}
