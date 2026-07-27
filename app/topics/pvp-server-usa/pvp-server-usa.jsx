import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-usa');
}

export default function PvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-usa" />;
}
