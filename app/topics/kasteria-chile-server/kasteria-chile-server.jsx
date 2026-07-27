import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-chile-server');
}

export default function KasteriaChileServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-chile-server" />;
}
