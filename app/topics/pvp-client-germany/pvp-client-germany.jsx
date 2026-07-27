import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-germany');
}

export default function PvpClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-germany" />;
}
