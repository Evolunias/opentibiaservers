import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-mexico');
}

export default function NonPvpClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-mexico" />;
}
