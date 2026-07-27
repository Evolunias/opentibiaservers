import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-cyntara-servers');
}

export default function EvoCyntaraServersKeywordPage() {
  return <StaticKeywordPage slug="evo-cyntara-servers" />;
}
