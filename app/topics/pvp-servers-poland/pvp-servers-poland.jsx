import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-poland');
}

export default function PvpServersPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-poland" />;
}
