import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-germany');
}

export default function PvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-germany" />;
}
