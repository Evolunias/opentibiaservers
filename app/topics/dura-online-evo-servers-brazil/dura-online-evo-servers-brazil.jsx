import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-servers-brazil');
}

export default function DuraOnlineEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-servers-brazil" />;
}
