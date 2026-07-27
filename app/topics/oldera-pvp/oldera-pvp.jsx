import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp');
}

export default function OlderaPvpKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp" />;
}
