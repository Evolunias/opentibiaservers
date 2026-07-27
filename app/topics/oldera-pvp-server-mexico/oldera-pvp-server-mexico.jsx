import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-mexico');
}

export default function OlderaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-mexico" />;
}
