import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-dura-online-servers');
}

export default function EvoDuraOnlineServersKeywordPage() {
  return <StaticKeywordPage slug="evo-dura-online-servers" />;
}
