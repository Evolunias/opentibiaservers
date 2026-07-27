import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-germany');
}

export default function PvpOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-germany" />;
}
