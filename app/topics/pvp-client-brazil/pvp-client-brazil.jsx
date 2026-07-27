import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-brazil');
}

export default function PvpClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-brazil" />;
}
