import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-poland');
}

export default function PvpOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-poland" />;
}
