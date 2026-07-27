import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-usa');
}

export default function PvpClientUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-usa" />;
}
