import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-argentina');
}

export default function PvpClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-argentina" />;
}
