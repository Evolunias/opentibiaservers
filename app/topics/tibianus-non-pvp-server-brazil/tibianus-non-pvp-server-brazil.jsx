import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-brazil');
}

export default function TibianusNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-brazil" />;
}
