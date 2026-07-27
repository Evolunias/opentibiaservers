import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-dura-online-server');
}

export default function EvoDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="evo-dura-online-server" />;
}
