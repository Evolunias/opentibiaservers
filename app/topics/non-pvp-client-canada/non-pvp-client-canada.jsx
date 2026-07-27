import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-canada');
}

export default function NonPvpClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-canada" />;
}
