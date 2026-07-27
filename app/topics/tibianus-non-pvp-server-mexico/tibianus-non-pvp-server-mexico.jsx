import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-mexico');
}

export default function TibianusNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-mexico" />;
}
