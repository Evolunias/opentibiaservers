import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-canada');
}

export default function PvpClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-canada" />;
}
