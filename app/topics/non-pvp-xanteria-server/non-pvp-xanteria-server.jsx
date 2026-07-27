import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-xanteria-server');
}

export default function NonPvpXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-xanteria-server" />;
}
