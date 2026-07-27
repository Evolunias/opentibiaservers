import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-mexico');
}

export default function ThorniaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-mexico" />;
}
