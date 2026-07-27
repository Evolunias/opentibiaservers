import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-poland');
}

export default function PvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-poland" />;
}
