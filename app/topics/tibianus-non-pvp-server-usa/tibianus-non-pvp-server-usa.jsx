import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-usa');
}

export default function TibianusNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-usa" />;
}
