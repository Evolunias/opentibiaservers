import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-servers-poland');
}

export default function DuraOnlineEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-servers-poland" />;
}
