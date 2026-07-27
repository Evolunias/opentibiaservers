import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-argentina');
}

export default function TibianusNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-argentina" />;
}
