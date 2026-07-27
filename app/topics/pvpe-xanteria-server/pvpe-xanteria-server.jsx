import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-xanteria-server');
}

export default function PvpeXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-xanteria-server" />;
}
