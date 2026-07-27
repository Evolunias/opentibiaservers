import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-mexico');
}

export default function PvpClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-mexico" />;
}
