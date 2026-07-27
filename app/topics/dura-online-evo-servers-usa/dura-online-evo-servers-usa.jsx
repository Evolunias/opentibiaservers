import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-servers-usa');
}

export default function DuraOnlineEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-servers-usa" />;
}
